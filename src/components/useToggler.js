import { useState } from "react"

function useToggler() {
    const [isToggleOn, setToggledOn] = useState(false)

    /*  setToggledOn = (prevState) => {
          return isToggleOn = !prevState.isToggleOn
      }*/

    function toggle() {
        setToggledOn(prevState => !prevState);
    }


    return { isToggleOn, toggle }
}
export default useToggler;