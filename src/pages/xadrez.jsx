import Componente from "@/components/componente";
import styles from "@/styles/estilizacao.module.css"

export default function tabuleiroXadrez(){
    return(
        <>
        <div className={styles.tabuleiro}>
        <Componente css="pecarosa"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecarosa"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecarosa"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecarosa"/>
        <Componente css = "quadradobranco"/>
        </div>
        <div className={styles.tabuleiro}>
        <Componente css = "quadradobranco"/>
        <Componente css="pecarosa"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecarosa"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecarosa"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecarosa"/>
        </div>
        <div className={styles.tabuleiro}>
        <Componente css="pecarosa"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecarosa"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecarosa"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecarosa"/>
        <Componente css = "quadradobranco"/>
        </div>
        <div className={styles.tabuleiro}>
        <Componente css = "quadradobranco"/>
        <Componente css="quadradopreto"/>
        <Componente css = "quadradobranco"/>
        <Componente css="quadradopreto"/>
        <Componente css = "quadradobranco"/>
        <Componente css="quadradopreto"/>
        <Componente css = "quadradobranco"/>
        <Componente css="quadradopreto"/>
        </div>
        <div className={styles.tabuleiro}>
        <Componente css="quadradopreto"/>
        <Componente css = "quadradobranco"/>
        <Componente css="quadradopreto"/>
        <Componente css = "quadradobranco"/>
        <Componente css="quadradopreto"/>
        <Componente css = "quadradobranco"/>
        <Componente css="quadradopreto"/>
        <Componente css = "quadradobranco"/>
        </div>
        <div className={styles.tabuleiro}>
        <Componente css = "quadradobranco"/>
        <Componente css="pecaroxo"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecaroxo"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecaroxo"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecaroxo"/>
        </div>
        <div className={styles.tabuleiro}>
        <Componente css="pecaroxo"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecaroxo"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecaroxo"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecaroxo"/>
        <Componente css = "quadradobranco"/>
        </div>
        <div className={styles.tabuleiro}>
        <Componente css = "quadradobranco"/>
        <Componente css="pecaroxo"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecaroxo"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecaroxo"/>
        <Componente css = "quadradobranco"/>
        <Componente css="pecaroxo"/>
        </div>
        </>
    )
}