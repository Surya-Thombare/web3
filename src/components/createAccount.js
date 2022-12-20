import React, { useState, useEffect, useRef } from "react";
import { createAccount } from "../functions/createAccount"

const CreateAccount = () => {

  return (
    <button onClick={createAccount()}>createAccount</button>
  )
}

export default CreateAccount