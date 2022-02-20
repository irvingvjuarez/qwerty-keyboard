let deletedKey

function getDOMKeys(recipe){
  let recipeCoordinates = [START]
  let i = 0
  recipe = recipe.split(/\s+/)
  recipe.forEach(step => {
    let newCoordinate
    switch(step){
      case "right":
        newCoordinate = [recipeCoordinates[i][0] + 1, recipeCoordinates[i][1]]
      break;
      case "left":
        newCoordinate = [recipeCoordinates[i][0] - 1, recipeCoordinates[i][1]]
      break;
      case "down":
        newCoordinate = [recipeCoordinates[i][0], recipeCoordinates[i][1] + 1]
      break;
      case "up":
        newCoordinate = [recipeCoordinates[i][0], recipeCoordinates[i][1] - 1]
      break;
      case "enter":
        newCoordinate = recipeCoordinates[i]
      break;
      default:
        // all coordinates were done
      break;
    }
    if(newCoordinate){
      recipeCoordinates.push(newCoordinate)
    }
    i++
  })
  recipeCoordinates = recipeCoordinates.map(step => keys[step[1]][step[0]])
  return recipeCoordinates
}

function type(DOMElements){
  const currentKey = DOMElements[0]
  let newClass
  if(deletedKey){
    if(currentKey){
      if(currentKey.textContent === deletedKey.textContent){
        newClass = "pressed"
        RESULT_CONTAINER.textContent = RESULT_CONTAINER.textContent + currentKey.textContent
      }else{
        newClass = "hover"
      }
    }
  }else{
    newClass = "hover"
  }
  if(currentKey){
    currentKey.classList.add(newClass)
  }
  setTimeout(() => {
    if(currentKey){
      currentKey.classList.remove(newClass)
    }
    deletedKey = DOMElements.splice(0,1)[0]
    if(DOMElements.length){
      type(DOMElements)
    }
  }, 600)
}