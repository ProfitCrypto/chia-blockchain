import React from 'react';
import { Trans } from '@lingui/macro';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Flex, Link } from '@profit/core';
import LayoutMain from '../layout/LayoutMain';
import PoolOverview from './PoolOverview';
import PlotNFTAdd from '../plotNFT/PlotNFTAdd';
import PlotNFTChangePool from '../plotNFT/PlotNFTChangePool';
import PlotNFTAbsorbRewards from '../plotNFT/PlotNFTAbsorbRewards';
import { PoolHeaderTarget } from './PoolHeader';
import usePlotNFTs from '../../hooks/usePlotNFTs';
import { PoolHeaderSource } from './PoolHeader';
import PoolCollection from './PoolCollection';

export default function Pool() {
  const { path } = useRouteMatch();
  const { loading } = usePlotNFTs();

  return (
    <LayoutMain
      loading={loading}
      loadingTitle={<Trans>Loading Plot NFTs</Trans>}
      title={
        <>
          <Link to="/dashboard/pool" color="textPrimary">
            <Trans>NFT Recovery</Trans>
          </Link>
          <PoolHeaderTarget />
        </>
      }
    >
      <PoolCollection />

    </LayoutMain>
  );
}
