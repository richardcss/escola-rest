import Sequelize, { Model } from 'sequelize';

import config from '../config/config';

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio',
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${config.url}/images/${this.getDataValue('filename')}`
          }
        }
      },
      {
        sequelize,
        tableName: 'fotos',
      }
    );
    return this;
  }
}
