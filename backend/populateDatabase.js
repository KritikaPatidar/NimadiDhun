const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category'); // Your Category model

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');

  const categories = [
    {
      name: 'Wedding',
      subcategories: [
        'Chula Kothi',
        'Lagnyaa',
        'Ganesh Pujan',
        'Khal Maati',
        'God Gadha',
        'Mata Pujan',
        'Mamera(Peravani)',
        'Haldi',
        'Sangeet - Kawada',
        'Var Nikasi',
        'Baraat',
        'Mata Visarjan',
      ],
    },
    // Add more categories here...
  ];

  Category.insertMany(categories)
    .then(() => console.log('Categories inserted'))
    .catch((err) => console.log(err))
    .finally(() => mongoose.connection.close());
}).catch((err) => console.log(err));
