import Link from "next/link";
import { CartImageContainer, HeaderContainer, LogoContainer } from "./style"
interface HeaderProps {
    quantity?: number;
}
export const Header = ({quantity}: HeaderProps) => {
    return (
        <HeaderContainer>
            <LogoContainer>
            <Link href="/">MARVEL</Link>
            </LogoContainer>
            <CartImageContainer>
                <h2>{quantity}</h2>
            </CartImageContainer>
        </HeaderContainer>
    )
}