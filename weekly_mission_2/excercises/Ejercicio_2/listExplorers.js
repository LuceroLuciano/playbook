const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]

   // 1. Imprime el nombre de cada explorer en la lista con FOR EACH
   console.log("1. Imprime el nombre de cada explorer en la lista: \n")
   explorers.forEach((nameExplorer) => console.log(nameExplorer.name))
   

   // 2. Imprime el stack de cada explorer usando FOR EACH
   console.log("---".repeat(25))
   console.log("2. Imprime el stack de cada explorer usando FOR EACH: \n")
   explorers.forEach((stackExplorer) => console.log(stackExplorer.stack))


   // 3. Crea una nueva lista con las listas de stacks de cada explorer usando MAP
   console.log("---".repeat(25))
   console.log("3. Crea una nueva lista con las listas de stacks de cada explorer usando MAP: \n")
   // MAP recorre una lista y crea una nueva
   const newStackListExplorers = explorers.map(function(stackExplorers){return stackExplorers.stack})
   console.log(newStackListExplorers)


   /* 4. Obtén la lista de explorers que tengan en su stack "js", 
   usa FILTER (para validar un elemento en un lista se usa el método includes)*/
   console.log("---".repeat(25))
   console.log('4. Obtén la lista de explorers que tengan en su stack "js",usando FILTER y el método includes')
  
   const explorersWithStackJs = explorers.filter((stack) => 
        stack.stack.includes('js')              
   )  
   // explorersWithStackJs.forEach((nameExplorer) => console.log(nameExplorer.name))
   console.log(explorersWithStackJs)

    
   // 5. Buscar el primer explorer que sea de l CDMX, usando FIND
   console.log("---".repeat(25))
   console.log("5. Buscar el primer explorer que sea de la CDMX, usando FIND")
   const findExplorerOfCdmx = explorers.find((city) => city.city == "CDMX")
   console.log(findExplorerOfCdmx)

   
   // 6. Obten la suma de todos los excercises_completed, usando REDUCE
    console.log("---".repeat(25))
    console.log('6. Obten la suma de todos los excercises_completed, usando REDUCE')
    const sumAllExcercisesCompleted = function (excercisesExplorerList) {
        // recorre la lista y se crea una nueva lista con MAP
        const excercisesCompleted = excercisesExplorerList.map(excercises => excercises.exercises_completed)
        console.log(excercisesCompleted)
        const totalExcercisesCompleted = excercisesCompleted.reduce((acc, element) => acc + element)
        return totalExcercisesCompleted
    }

    console.log(`La suma de los ejercicios completados de los explorers es: ${sumAllExcercisesCompleted(explorers)}`)