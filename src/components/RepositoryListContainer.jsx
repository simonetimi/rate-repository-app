import {FlatList} from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

export const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
            renderItem={RepositoryItem}
        />
    );
};

const RepositoryList = () => {
    const { repositories } = useRepositories();

    return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;