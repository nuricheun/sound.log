import React, { useEffect, useState } from "react";

import styled, { css } from "styled-components";
import { RowSection, ColSection, CenterWrapper } from "../wrapper/wrapper";
import { TrackImage } from "../trackImage/trackImage";
import {
  BasicForm,
  TitleDiv,
  TitleP,
  BasicFormInput,
  BasicInputLabel,
  BasicTextArea,
  BasicButton,
  BasicSelect,
} from "../designSystem/basicForm";
import { useForm } from "react-hook-form";

const TrackFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 25px 30px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: #fff;

  height: 600px;
`;

const TrackLeftContainer = styled(ColSection)`
  display: flex;
  align-items: center;
  width: 40%;
`;

const TrackForm = styled(BasicForm)`
  width: 60%;
  padding: 20px;
  align-items: flex-start;
`;

const TrackImagePreview = styled(TrackImage)`
  width: 260px;
  height: 260px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const FileInput = styled.input.attrs({
  type: "file",
})`
  margin-left: 10px;
`;

const SubmitButton = styled(BasicButton)`
  width: 80px;
  height: 30px;
  font-size: 15px;
  margin-left: 5px;
  ${(props) =>
    props.cancel &&
    css`
      color: #999;
      background-color: #fff;
      border: 1px solid #999;
    `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  flex-direction: row;
`;

const TrackFormTitleDiv = styled(TitleDiv)`
  margin-bottom: 30px;
  justify-content: flex-start;
`;

export const TrackUploadForm = ({
  fetchAllGenres,
  handleTrackSubmit,
  fetchTrack,
  genres,
  artist_id,
  history,
  track,
  trackId,
  formType,
}) => {
  const { register, handleSubmit, setValue } = useForm();

  //for image preview
  const [imgData, setImgData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (formType === "Edit") {
      fetchAllGenres()
        .then(() => fetchTrack(trackId))
        .then(() => setLoading(false));
    } else {
      fetchAllGenres().then(() => setLoading(false));
    }
  }, []);

  if (isLoading) return null;

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("artist_id", artist_id);
    formData.append("genre", data.genre);
    formData.append("description", data.description);
    if (data.audio[0]) {
      console.log(data.audio[0]);
      formData.append("audio", data.audio[0]);
    }
    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }
    handleTrackSubmit(formData, trackId).then((res) => history.push(`/tracks`));
  };

  return (
    <CenterWrapper>
      <TrackFormContainer>
        <TrackFormTitleDiv>
          <TitleP>Basic Info</TitleP>
        </TrackFormTitleDiv>
        <RowSection>
          <TrackLeftContainer>
            <TrackImagePreview img={track.imageUrl || imgData} />
          </TrackLeftContainer>
          <TrackForm onSubmit={handleSubmit(onSubmit)}>
            <BasicInputLabel>Title</BasicInputLabel>
            <BasicFormInput
              name="title"
              ref={register({ required: true })}
              defaultValue={track ? track.title : ""}
            />
            <BasicInputLabel>Genre</BasicInputLabel>
            <BasicSelect
              name="genre"
              ref={register({ required: true })}
              defaultValue={track ? track.genre : ""}
            >
              <option selected disabled>
                ------Select------
              </option>
              {genres.length &&
                genres.map((e) => (
                  <option defaultValue={e.type}>{e.type}</option>
                ))}
            </BasicSelect>
            <BasicInputLabel>Description</BasicInputLabel>
            <BasicTextArea
              name="description"
              reg={register({ required: true })}
              defaultValue={track ? track.description : ""}
            />
            <BasicInputLabel>
              Audio
              <FileInput name="audio" ref={register({ required: false })} />
            </BasicInputLabel>
            <BasicInputLabel>
              Image
              <FileInput
                name="image"
                ref={register({ required: false })}
                onChange={onChangePicture}
              />
            </BasicInputLabel>
            <ButtonWrapper>
              <SubmitButton cancel={`cancel`}>Cancel</SubmitButton>
              <SubmitButton value="submit">Submit</SubmitButton>
            </ButtonWrapper>
          </TrackForm>
        </RowSection>
      </TrackFormContainer>
    </CenterWrapper>
  );
};
