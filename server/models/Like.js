const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//TODO: more constrain
const likeSchema = new Schema(
  {
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    _project: { type: Schema.Types.ObjectId, ref: 'Project' }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);
const Like = mongoose.model('Like', likeSchema);
module.exports = Like;
