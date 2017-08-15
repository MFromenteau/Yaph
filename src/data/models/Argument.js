import DataType from 'sequelize';
import Model from '../sequelize';

const Argument = Model.define('Argument', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  value: {
    type: DataType.STRING,
  },

  score: {
    type: DataType.INTEGER,
  },

  subjectID: {
    type: DataType.UUID,
    primaryKey: true,
  },
});

export default Argument;
