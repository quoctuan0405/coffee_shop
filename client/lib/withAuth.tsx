import React from "react";
import {connect} from "react-redux";
import {AppContextType, AppInitialProps, NextComponentType} from "next/dist/next-server/lib/utils";
import {setMe} from "../src/actions";
import {useMeQuery} from "../src/generated/operation";
import {StoreState} from "../src/reducers";

interface AuthComponentProps {
    setMe: typeof setMe,
    me: StoreState["me"]
}

export const withAuth = (ChildComponent: NextComponentType<AppContextType, AppInitialProps, any>) => {
    const AuthComponents: React.FC<AuthComponentProps> = ({setMe, ...props}) => {
        const {data} = useMeQuery();

        if (data?.me) {
            setMe(data.me);
        }
        return <ChildComponent {...props}/>
    };

    const mapStateToProps = (state: StoreState) => {
        return {me: state.me}
    };

    // @ts-ignore
    return connect(mapStateToProps, {setMe})(AuthComponents);
};