import React from 'react'
import selsupLogo from './assets/logo.png'
import './App.scss'

//----------------------------------------------------------------
// INTERFACES

interface Param {
  id: number
  name: string
  type: ParamTypes
}

enum ParamTypes {
  string = 'text'
}

interface Model {
  paramValues: ParamValue[]
}

interface ParamValue {
  paramId: number
  value: string
}

//----------------------------------------------------------------
// INITIAL PARAMS AND MODEL

const initialParams = [
  {
    id: 1,
    name: 'Назначение',
    type: ParamTypes.string
  },
  {
    id: 2,
    name: 'Длина',
    type: ParamTypes.string
  }
]

const initialModel = {
  paramValues: [
    {
      paramId: 1,
      value: 'повседневное'
    },
    {
      paramId: 2,
      value: 'макси'
    }
  ]
}

//----------------------------------------------------------------
// COMPONENT ParamEditor

interface Props {
  params: Param[]
  model: Model
  setModel: React.Dispatch<React.SetStateAction<Model>>
}

const ParamEditor: React.FC<Props> = ({ params, model, setModel }) => {
  // onChange Handler for input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    setModel(model => ({
      ...model,
      paramValues: [
        ...model.paramValues.map(paramValue => {
          if (paramValue.paramId === id) {
            paramValue.value = e.target.value
          }
          return paramValue
        })
      ]
    }))
  }

  // Getting param value by id
  const getParamValue = (paramValues: ParamValue[], id: number) => {
    const paramValue = paramValues.find(paramValue => paramValue.paramId === id)

    return paramValue?.value
  }

  return (
    <>
      {params.map(param => (
        <div key={param.id} className='field'>
          <p className='title'>{param.name}</p>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, param.id)
            }
            value={getParamValue(model.paramValues, param.id)}
            type={param.type}
          />
        </div>
      ))}
    </>
  )
}

//----------------------------------------------------------------
// APP

export const App: React.FC = () => {
  const params: Param[] = initialParams // Get params from initialParams

  const [model, setModel] = React.useState<Model>(initialModel)

  const getModel = () => {
    alert('Model in console')
    console.log('Model', model)
  }

  return (
    <div className='root'>
      <div className='header'>
        <a href='https://selsup.ru/' target='_blank'>
          <img src={selsupLogo} className='logo' alt='Selsup logo' />
        </a>
      </div>

      <div className='body'>
        <h1>Test for Selsup company</h1>
        <div className='editor'>
          <ParamEditor params={params} model={model} setModel={setModel} />
        </div>
        <button onClick={getModel}>Get Model</button>
      </div>
    </div>
  )
}

//----------------------------------------------------------------
