import { FC, useContext } from 'react'
import { AppContext } from "../../app"
import { getUUIDAllias, UUID_SEPARATOR, UuidService } from "../../entities"
import { translateMessage, useMount } from "../../shared"
import './style.css'

export const PushMenu: FC = () => {
    const { navNodes, uuidPath, setUUIDPath, language } = useContext(AppContext)
    const uuidService = new UuidService(uuidPath)

    const isMounted = useMount()
    const isFirstNode = uuidPath === ''

    const title = translateMessage(language, getUUIDAllias(uuidService.getLastUUID()))
    const paths = uuidService.getUUIDPaths(navNodes)

    return (
        <div className={'pushMenu'}>
            <div>
                <h3>
                    {title}
                </h3>
                { !isFirstNode && <button onClick={() => { setUUIDPath(uuidPath.split(UUID_SEPARATOR).slice(0, -1).join(UUID_SEPARATOR)) }}>
                    назад
                </button> }
            </div>

            { isMounted && <ul>
                { paths.map(currentUUID => {
                    const incrementedUUIDPath = uuidPath + (isFirstNode ? '' : UUID_SEPARATOR) + currentUUID
                    const pathLabel = translateMessage(language, getUUIDAllias(currentUUID))
                    return <li key={incrementedUUIDPath}>
                        <button onClick={() => { setUUIDPath(incrementedUUIDPath) }}>
                            {pathLabel}
                        </button>
                    </li>
                }) }
            </ul> }

        </div>
    );
};

export default PushMenu