exports.showAll = async function(req, res){
    res.success([], "Posts fetched successfully");
}

exports.view = async function(req, res){
    const { id } = req.params;

    res.success({
        id,
    }, "Post fetched successfully");
}

exports.create = async function(req, res){
    const { name, description } = req.body;

    res.success({
        name, 
        description
    }, "Post created successfully");
}