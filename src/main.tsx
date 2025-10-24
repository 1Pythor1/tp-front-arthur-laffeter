import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { User } from './Core/Data/User.ts'
import { UserPresenter } from './Core/Presenters/UserPresenter.ts'
import { DummyJsonUserInteractor } from './Core/ApiInteractors/DummyJsonUserInteractor.ts'
import { DummyJsonUserInteractorFake } from './Core/ApiInteractors/DummyJsonUserInteractorFake.ts'
import { AppComponent } from './Components/App/AppComponent.tsx'
import { Singelton } from "./Core/Utils/Singelton.ts"
import type { IPresenter } from './Core/Interfaces/IPresenter.ts';
import { Renderer } from './Renderer.tsx'
import { renderUserCard } from './Render/UserRenderCard.tsx'


const presenter: Singelton<IPresenter<User>> = Singelton.getInstance(new UserPresenter(new DummyJsonUserInteractor()));
const renderer = new Renderer<User>(presenter.instance!, renderUserCard)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppComponent render={renderer}/>
  </StrictMode>,
)
