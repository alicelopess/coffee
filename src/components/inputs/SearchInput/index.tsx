import { MagnifyingGlass } from "@phosphor-icons/react";
import { Input, SearchIcon, Wrapper } from "./style";

export function SearchInput() {
    return (
        <Wrapper>
            <Input placeholder="Pesquisar"/>
            <SearchIcon>
                <MagnifyingGlass size={16} />
            </SearchIcon>
        </Wrapper>
    )
}