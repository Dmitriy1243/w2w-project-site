export const selectStatusCreateUser = (state) => state.authCreateExtraReducer.statusCreateUser;

export const selectActiveModal = (state) => state.modalPersonalDatalReducer.isActivModal;
export const selectOpenAgreements = (state) => state.openUserAgreementsReducer.isOpenUserAgreements;
export const selectOpenPolicyProcessingData = (state) => state.openPolicyProcessingDataReducer.isOpenPolicyProcessingData;

