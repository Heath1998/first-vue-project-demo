import state from './state'
export default{
    headershow:(state)=>{
        state.headershow=true
    },
    headerhide:(state)=>{
        state.headershow=false
    },
    footershow:(state)=>{
        state.footershow=true
    },
    footerhide:(state)=>{
        state.footershow=false
    },
    loadingshow:(state)=>{
        state.loadingshow=true
    },
    loadinghide:(state)=>{
        state.loadingshow=false
    }
}