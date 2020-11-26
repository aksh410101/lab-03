const arr = [{
    UniqueId: 1001,
    name: 'Clark',
    Age: 32,
    Gender: 'male'
},
{
    UniqueId: 1002,
    name: 'Nathine',
    Age: 21,
    Gender: 'female'
},
{
    UniqueId: 1003,
    name: 'Adios',
    Age: 44,
    Gender: 'male'
},
{
    UniqueId: 1004,
    name: 'Tommy',
    Age: '22',
    Gender: 'male'
}];

exports.index = (_, res) => {
    res.status(200).json(arr);
};

exports.show = (req,res,next) => {

    const id = req.params.id;
    const a = arr.UniqueId[Id];
    
};