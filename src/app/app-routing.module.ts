import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RoomlistComponent } from './pages/roomlist/roomlist.component';
import { AddroomComponent } from './pages/addroom/addroom.component';
import { ChatroomComponent } from './pages/chatroom/chatroom.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'roomlist', component: RoomlistComponent },
  { path: 'addroom', component: AddroomComponent },
  { path: 'chatroom/:nickname/:roomid', component: ChatroomComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
