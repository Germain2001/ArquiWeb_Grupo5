module.exports = function () {
  var data = {
    departamentos: [
      {
        id: 1,
        NDepartment: "Amazonas",

      },
      {
        id: 2,
        NDepartment: "Ancash",

      },
      {
        id: 3,
        NDepartment: "Apurimac",

      },
      {
        id: 4,
        NDepartment: "Arequipa",

      },
      {
        id: 5,
        NDepartment: "Ayacucho",

      },
      {
        id: 6,
        NDepartment: "Cajamarca",

      },
      {
        id: 7,
        NDepartment: "Callao",

      },
      {
        id: 8,
        NDepartment: "Lima",

      },
      {
        id: 9,
        NDepartment: "Piura",

      }
    ],
    provincias: [
      {
        id: 1,
        NProvince: "Barranca",
        department: {
          "id": 8,
          NDepartment: "Lima"
        }
      },
      {
        id: 2,
        NProvince: "Huarochiri",
        department: {
          "id": 8,
          NDepartment: "Lima"
        }
      },
      {
        id: 3,
        NProvince: "Chachapoyas",
        department: {
          "id": 1,
          NDepartment: "Amazonas"
        }
      },
      {
        id: 4,
        NProvince: "Suyana",
        department: {
          "id": 9,
          NDepartment: "Piura"
        }
      },
      {
        id: 5,
        NProvince: "Talara",
        department: {
          "id": 9,
          NDepartment: "Piura"
        }
      },
      {
        id: 6,
        NProvince: "Callao",
        department: {
          "id": 7,
          NDepartment: "Callao"
        }
      },
      {
        id: 7,
        NProvince: "Lima",
        department: {
          "id": 6,
          NDepartment: "Cajamarca"
        }
      }
    ],
    distritos: [
      {
        CDistrict: 1,
        NDistrict: "Miraflores",
        province: { CProvince: 1 }
      },
      {
        CDistrict: 2,
        NDistrict: "Jesus Maria",
        province: { CProvince: 1 }
      },
      {
        CDistrict: 3,
        NDistrict: "San Isidro",
        province: { CProvince: 1 }
      },
      {
        CDistrict: 4,
        NDistrict: "Lince",
        province: { CProvince: 1 }
      },

      {
        CDistrict: 5,
        NDistrict: "Brena",
        province: { CProvince: 1 }
      },

      {
        CDistrict: 6,
        NDistrict: "Rimac",
        province: { CProvince: 1 }
      },
      {
        CDistrict: 7,
        NDistrict: "Los Olivos",
        province: { CProvince: 1 }
      },

      {
        CDistrict: 8,
        NDistrict: "La Molina",
        province: { CProvince: 1 }
      },

      {
        CDistrict: 9,
        NDistrict: "Independencia",
        province: { CProvince: 1 }
      },

      {
        CDistrict: 10,
        NDistrict: "SJL",
        province: { CProvince: 1 }
      }
    ],
    denuncias: [
      {
        CComplaint: 1,
        NComplaint: "Robo",
        policeStation: { CPoliceStation: 2 },
        zone: { CZone: 1 }
      },

      {
        CComplaint: 2,
        NComplaint: "Intento de Robo",
        policeStation: { CPoliceStation: 5 },
        zone: { CZone: 2 }
      },

      {
        CComplaint: 3,
        NComplaint: "Robo",
        policeStation: { CPoliceStation: 6 },
        zone: { CZone: 3 }
      },

      {
        CComplaint: 4,
        NComplaint: "Robo",
        policeStation: { CPoliceStation: 7 },
        zone: { CZone: 1 }
      },

      {
        CComplaint: 5,
        NComplaint: "Intento de Robo",
        policeStation: { CPoliceStation: 5 },
        zone: { CZone: 1 }
      },

      {
        CComplaint: 6,
        NComplaint: "Intento de Robo",
        policeStation: { CPoliceStation: 1 },
        zone: { CZone: 4 }
      },

      {
        CComplaint: 7,
        NComplaint: "Intento de Robo",
        policeStation: { CPoliceStation: 8 },
        zone: { CZone: 5 }
      }
    ],
    personas: [
      {
        CPerson: 1,
        NName: "Pedro",
        NLastName: "Uribe",
        DBirth: "1998-10-15",
        TMail: "pedro@mail.com",
        address: { CAddress: 1 }
      },

      {
        CPerson: 2,
        NName: "Joaquin",
        NLastName: "Cuadros",
        DBirth: "2000-02-01",
        TMail: "joaquin@mail.com",
        address: { CAddress: 4 }
      },

      {
        CPerson: 3,
        NName: "Sofia",
        NLastName: "Vega",
        DBirth: "2002-07-11",
        TMail: "sofia@mail.com",
        address: { CAddress: 3 }
      },

      {
        CPerson: 4,
        NName: "Victor",
        NLastName: "Huertas",
        DBirth: "2001-08-19",
        TMail: "victor@mail.com",
        address: { CAddress: 5 }
      },

      {
        CPerson: 5,
        NName: "Brian",
        NLastName: "Arroyo",
        DBirth: "2000-11-11",
        TMail: "brian@mail.com",
        address: { CAddress: 2 }
      },

      {
        CPerson: 6,
        NName: "Laura",
        NLastName: "Aliaga",
        DBirth: "1996-05-10",
        TMail: "laura@mail.com",
        address: { CAddress: 7 }
      },

      {
        CPerson: 7,
        NName: "Germain",
        NLastName: "Espino",
        DBirth: "2001-08-08",
        TMail: "germain@mail.com",
        address: { CAddress: 6 }
      }
    ],
    comisarias: [
      {
        CPoliceStation: 1,
        address: { CAddress: 1 },
        NName: "Alfonso Ugarte",
        TPhone: "3896503"
      },

      {
        CPoliceStation: 2,
        address: { CAddress: 2 },
        NName: "Chacra Colorada",
        TPhone: "4812507"
      },

      {
        CPoliceStation: 3,
        address: { CAddress: 3 },
        NName: "Monserrat PNP",
        TPhone: "7822510"
      },

      {
        CPoliceStation: 4,
        address: { CAddress: 4 },
        NName: "Orrantia del Mar",
        TPhone: "6997414"
      },

      {
        CPoliceStation: 5,
        address: { CAddress: 5 },
        NName: "San Isidro",
        TPhone: "4827858"
      },

      {
        CPoliceStation: 6,
        address: { CAddress: 6 },
        NName: "Policia Nacional del Peru",
        TPhone: "4167310"
      },

      {
        CPoliceStation: 7,
        address: { CAddress: 7 },
        NName: "Belisario Flores",
        TPhone: "3896500"
      }
    ],
    usuarios: [
      {
        idUser: 1,
        NUsername: "user1",
        NPassword: "password1"
      },

      {
        idUser: 2,
        NUsername: "user2",
        NPassword: "password2"
      },

      {
        idUser: 3,
        NUsername: "user3",
        NPassword: "password3"
      },

      {
        idUser: 4,
        NUsername: "user4",
        NPassword: "password4"
      },

      {
        idUser: 5,
        NUsername: "user5",
        NPassword: "password5"
      },

      {
        idUser: 6,
        NUsername: "user6",
        NPassword: "password6"
      },

      {
        idUser: 7,
        NUsername: "user7",
        NPassword: "password7"
      }
    ],
    direcciones: [
      {
        CAddress: 1,
        NUrb: "Urbanizacion 1",
        NStreet: "Calle 1",
        NBlock: "Bloque 1",
        NLot: 1,
        district: { CDistrict: 1 }
      },

      {
        CAddress: 2,
        NUrb: "Urbanizacion 2",
        NStreet: "Calle 2",
        NBlock: "Bloque 2",
        NLot: 2,
        district: { CDistrict: 2 }
      },

      {
        CAddress: 3,
        NUrb: "Urbanizacion 3",
        NStreet: "Calle 3",
        NBlock: "Bloque 3",
        NLot: 3,
        district: { CDistrict: 3 }
      },

      {
        CAddress: 4,
        NUrb: "Urbanizacion 4",
        NStreet: "Calle 4",
        NBlock: "Bloque 4",
        NLot: 4,
        district: { CDistrict: 4 }
      },

      {
        CAddress: 5,
        NUrb: "Urbanizacion 5",
        NStreet: "Calle 5",
        NBlock: "Bloque 5",
        NLot: 5,
        district: { CDistrict: 5 }
      },

      {
        CAddress: 6,
        NUrb: "Urbanizacion 6",
        NStreet: "Calle 6",
        NBlock: "Bloque 6",
        NLot: 6,
        district: { CDistrict: 6 }
      },

      {
        CAddress: 7,
        NUrb: "Urbanizacion 7",
        NStreet: "Calle 7",
        NBlock: "Bloque 7",
        NLot: 7,
        district: { CDistrict: 7 }
      }
    ],
    roles: [
      {
        id: 1,
        NRol: "Administrador",
      },
      {
        id: 2,
        NRol: "Peaton",
      },
      {
        id: 3,
        NRol: "Conductor",
      }
    ]
  }
  return data
}
