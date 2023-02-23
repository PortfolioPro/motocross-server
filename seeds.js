const Team = require('./models/team')

const teams = [
  {
    team: 'Honda Racing',
    manager: 'Michael Scott',
    manufacturer: 'Honda',
    riders: [
      {
        rider: 'Dwight Schrute',
        number: 1,
        country: 'USA',
        mechanic: 'Angela Martin'
      },
      {
        rider: 'Jim Halpert',
        number: 2,
        country: 'USA',
        mechanic: 'Pam Beesly'
      }
    ]
  },
  {
    team: 'Kawasaki Racing',
    manager: 'Jack Donaghy',
    manufacturer: 'Kawasaki',
    riders: [
      {
        rider: 'Liz Lemon',
        number: 3,
        country: 'USA',
        mechanic: 'Kenneth Parcell'
      },
      {
        rider: 'Tracy Jordan',
        number: 4,
        country: 'USA',
        mechanic: 'Jenna Maroney'
      }
    ]
  },
  {
    team: 'Yamaha Racing',
    manager: 'Lucille Bluth',
    manufacturer: 'Yamaha',
    riders: [
      {
        rider: 'Michael Bluth',
        number: 5,
        country: 'USA',
        mechanic: 'Tobias Funke'
      },
      {
        rider: 'Buster Bluth',
        number: 6,
        country: 'USA',
        mechanic: 'Gob Bluth'
      }
    ]
  },
  {
    team: 'Suzuki Racing',
    manager: 'Homer Simpson',
    manufacturer: 'Suzuki',
    riders: [
      {
        rider: 'Bart Simpson',
        number: 7,
        country: 'USA',
        mechanic: 'Moe Szyslak'
      },
      {
        rider: 'Lisa Simpson',
        number: 8,
        country: 'USA',
        mechanic: 'Ned Flanders'
      }
    ]
  }
]

Team.deleteMany({})
  .then(() => {
    Team.insertMany(teams)
      .catch(err => {
        console.log(err);
      })
  }).catch(err => {
    console.log(err);
  })
