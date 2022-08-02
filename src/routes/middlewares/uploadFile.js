const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const uploadFile = upload.array('files', 7);

module.exports = uploadFile;
