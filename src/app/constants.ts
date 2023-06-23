import { INavNode } from "../entities";

export const initialNodes: INavNode = {
    'user': {
        'profile': null,
        'billing': {
            'card': null,
            'cash': null,
            'billing': {
                'card': null,
                'cash': null,
                'billing': {
                    'card': null,
                    'cash': null
                }
            }
        }
    }
}