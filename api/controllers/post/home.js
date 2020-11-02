module.exports = async function(req, res) {
    console.log("This route shows home page of posts")

    const userId = req.session.userId
    const allPosts = await Post.find({user: userId})

    res.view('pages/home',
        {allPosts}
    )
    
}