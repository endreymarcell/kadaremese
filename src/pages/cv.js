import React from "react"
import {Layout} from "../components/layout"
import style from "./cv.module.css"

const ProfilePicture = (
  <img
    className={style.circularCutout}
    src="https://static.wixstatic.com/media/177945_6a2a580c4fc9469a995475e74eda7183~mv2_d_3456_3888_s_4_2.jpg/v1/crop/x_0,y_46,w_3456,h_3350/fill/w_450,h_436,al_c,q_80,usm_0.66_1.00_0.01/psjobb.webp"
  />
)

export default () => (
  <Layout leftSidebarRender={ProfilePicture}>
    <div>CV comes here</div>
  </Layout>
)
