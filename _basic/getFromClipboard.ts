/**
 * @func getFromClipboard
 * @desc 📝 Get text from clipboard
 * @returns {Promise<string>}
 */
export const getFromClipboard = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    navigator.clipboard.readText()
      .then(text => {
        resolve(text);
      })
      .catch(err => {
        reject(err);
      });
  });
};
