module.exports = {


  friendlyName: 'Delete',


  description: 'Delete post.',


  inputs: {
    postId: {
      type: 'string',
      required: true
    }
  },


  exits: {
    invalid: {
      description: 'This was an invalid post to delete'
    }
  },


  fn: async function (inputs) {
    console.log('We are in delete post action')
    
    console.log("trying to delete post with id: " + inputs.postId)

    const record = await Post.destroy({id: inputs.postId}).fetch()
    console.log(record)
    if (record.length == 0) {
      throw({invalid: {error: 'Record does not exist'}})
    }

    return record;

  }


};
