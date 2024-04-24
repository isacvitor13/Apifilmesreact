// import { useState } from "react"
import Styles from './Input.module.css'
function Input({ filme, placeholder }) {
    // const [NomeFilme, setNomeFilme] = useState('')

    // filme(NomeFilme)

    return (
        <section className={Styles.container_input}>
         {/* <input placeholder={placeholder}onChange={(e) => setNomeFilme(e.target.value.trim())} /> */}
            <input className={Styles.container_input} placeholder={placeholder}onChange={filme} />
     </section>
    )
}
export default Input