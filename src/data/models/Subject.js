import DataType from 'sequelize';
import Model from '../sequelize';

const Subject = Model.define('Subject', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  name: {
    type: DataType.STRING,
  },

  score: {
    type: DataType.INTEGER,
  },
});

export default Subject;
