import * as UserActionCreators from './user'
import * as InternshipActionCreators from './internship'

export default {
    ...UserActionCreators,
    ...InternshipActionCreators
}