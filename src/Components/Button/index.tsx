import styles from './Button.module.scss';

interface BotaoProps {
    children: string
    tipo?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

export default function Botao({ children, tipo = "button", onClick }: BotaoProps){
    return <button onClick={onClick} type={tipo} className={styles.botao}>{children}</button>
}

