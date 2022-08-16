class CommentController {
    addComment (req , res , next) {
        try {
            const bookID = req.params.id
            
        } catch (err) {
            next(err)
        }
    }

    replayComment (req , res , next) {
        try {
            
        } catch (err) {
            next(err)
        }
    }

    allComments (req , res , next) {
        try {
            
        } catch (err) {
            next(err)
        }
    }

    acceptComments (req , res , next) {
        try {
            
        } catch (err) {
            next(err)
        }
    }

    rejectComments (req , res , next) {
        try {
            
        } catch (err) {
            next(err)
        }
    }

    myComments (req , res , next) {
        try {
            
        } catch (err) {
            next(err)
        }
    }
    
    bookComments (req , res , next) {
        try {
            
        } catch (err) {
            next(err)
        }
    }
}


module.exports = {
    commentController : new CommentController()
}
