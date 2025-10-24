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
import { UserCardShort } from './Components/UserCard/UserCardShort.tsx'
import { UserCardFull } from './Components/UserDetail/UserCardFull.tsx'

import { BrowserRouter } from 'react-router-dom';

import './index.css';


const presenter: Singelton<IPresenter<User>> = Singelton.getInstance(new UserPresenter(new DummyJsonUserInteractorFake()));
const renderer = new Renderer<User>(presenter.instance!, UserCardShort, UserCardFull);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <AppComponent render={renderer}/>

    </BrowserRouter>
  </StrictMode>,
)

