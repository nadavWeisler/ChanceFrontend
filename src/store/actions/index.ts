import * as UserActionCreators from './user'
import * as InternshipActionCreators from './internship'
import * as CompanyActionCreators from './company'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...UserActionCreators,
    ...InternshipActionCreators,
    ...CompanyActionCreators
}