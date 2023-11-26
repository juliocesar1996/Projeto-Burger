import Sequelize from 'sequelize'
import mongoose from 'mongoose'
import Product from '../app/models/Product'

import User from '../app/models/User'
import Category from '../app/models/Category'



const models = [User, Product, Category]

class Database {
    constructor() {
        this.init()
        this.mongo()
    }

    init() {
        this.connection = new Sequelize(
          'postgresql://postgres:E3643GDcBGD*A*fG6gDCBAD125544Dcc@viaduct.proxy.rlwy.net:11981/railway')
        models
        .map((model) => model.init(this.connection))
        .map(
            (model) => model.associate && model.associate(this.connection.models)
        )
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            'mongodb://mongo:AF3CAdD5Gc5hee4E2-c-EH1BECEef1aG@monorail.proxy.rlwy.net:23493',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
    }
}

export default new Database()