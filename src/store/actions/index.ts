import * as UserActionCreators from './user'
import * as ExperimentActionCreators from './experiment'

export default {
    ...UserActionCreators,
    ...ExperimentActionCreators
}