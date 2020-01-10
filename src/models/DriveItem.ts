import mongoose from 'mongoose';

const driveItem = new mongoose.Schema({}, { strict: false });
const DriveItem = mongoose.model('DriveItem', driveItem);

export default DriveItem;