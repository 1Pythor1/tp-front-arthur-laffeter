import { User } from '../../Core/Data/User.ts'
import { UserPresenter } from '../../Core/Presenters/UserPresenter.ts'
import { DummyJsonUserInteractorFake } from '../../Core/ApiInteractors/DummyJsonUserInteractorFake.ts'
import { Singelton } from "../../Core/Utils/Singelton.ts"
import { Renderer } from '../../Renderer.tsx'
import { UserCardShort } from '../UserCard/UserCardShort.tsx'
import { UserCardFull } from '../UserDetail/UserCardFull.tsx'

import { main } from "./Main.tsx"

const renderer: Singelton<Renderer<User>> = Singelton.getInstance(new Renderer<User>(new UserPresenter(new DummyJsonUserInteractorFake()), UserCardShort, UserCardFull));


main(renderer.instance!)