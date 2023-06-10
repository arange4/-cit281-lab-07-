class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  function throwGenericError() {
    throw new Error("Generic error");
  }
  
  function throwCustomError() {
    throw new CustomError("Custom error");
  }
  
  try {
    console.log("Force  generic error");
    throwGenericError();
  } catch (error) {
    console.log("error:", error);
  } finally {
    console.log("Generic Error finally block");
  }
  
  try {
    console.log("force custom error...");
    throwCustomError(); 
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Custome Error Finally block");
  }
  

