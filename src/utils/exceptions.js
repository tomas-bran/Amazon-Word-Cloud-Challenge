
class HttpException extends Error {

    constructor(code,message,error){
        super(code,message)
    }

}


export class InvalidURLException extends HttpException {
    constructor(){
        super(400,"Invalid URL, please try again!");
    }
}

export const ErrorHandler = (error, res, next) => {

    if (!error) next(error) 
    if (error instanceof HttpException) {
      return res.status(error.code).json({ message: error.message, code: error.code, errors: error.error })
    }
    console.error(error.message)
    return res.status(500).json({ message: error.message, code: 500 })
  }