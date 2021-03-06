export const updateTrackById = (trackId, cols, files) => {
  let query = ["UPDATE tracks", "SET"];
  let set = [];
  let values = [];

  Object.keys(cols).forEach((key, idx) => {
    set.push(key + ` = $${idx + 1}`);
    values.push(cols[key]);
  });

  files.forEach((file) => {
    set.push(`${file.fieldname} = '${file.location}'`);
  });
  query.push(set.join(", "));
  query.push(`WHERE id = '${trackId}' RETURNING id as "trackId"`);
  let updateQuery = query.join(" ");

  return [updateQuery, values];
};
