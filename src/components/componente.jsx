import styles from "@/styles/estilizacao.module.css"

export default function Componente(props) {
    return(
        <div className={styles[props.css]}></div>
    )

}