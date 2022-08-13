

export const langs = {
    RUS: 'RUS',
    USA: 'USA',
    UAE: 'UAE',
    IND: 'IND',
    CHN: 'CHN'
} 
export const SET_LANG = 'SET_LANG' 

const initialState = langs.RUS;

export const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANG:
            return state = action.payload;
            return;
    
        default:
            return state;
    }
}