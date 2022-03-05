/**
 * @func copyToClipboard
 * @desc 📝 Copy text to clipboard
 * @param {string} text
 * @returns {Promise<void>}
 */
export const copyToClipboard = (text: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      // execCommand() API 已废弃⚠️
      // document.execCommand("copy");
      document.queryCommandValue('copy');
      resolve();
    } catch (err) {
      reject(err);
    }
    document.body.removeChild(textArea);
  });
};
