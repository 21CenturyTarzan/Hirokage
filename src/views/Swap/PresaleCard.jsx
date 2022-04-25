import { Paper, Button, FormLabel, Box, Grid, FormControl, OutlinedInput, InputAdornment, Typography } from "@material-ui/core";
import { Settings, CompareArrows, } from "@material-ui/icons";
import {  SvgIcon } from "@material-ui/core";

import InfoTooltipMulti from "../../components/InfoTooltip/InfoTooltipMulti";
import "./presaleCard.scss";
import TabPanel from "../../components/TabPanel";
import CardHeader from "../../components/CardHeader/CardHeader";
import CustomSelectet from "./CustomSelectet";

export function PresaleCard({address, cstpBalance, inputETHAmount, directionEHT2HIRO, setSwapDirectionCallback,
  setHIROBalanceCallback, setETHBalanceCallback, setMax, modalButton}) {
    return (
        <Paper id="swap-view" className="ohm-card">
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid container direction="column" spacing={2}>
              <Box display="flex" alignItems="center">
                <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                  <div>
                    <Typography variant="h3">Swap From</Typography>
                  </div>
                </FormControl>
              </Box>
              <Grid container direction="row" spacing={2}>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                  <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      placeholder="0"
                      value={inputETHAmount ? inputETHAmount : ''}
                      onChange={e => setETHBalanceCallback(e.target.value)}
                      labelWidth={0}
                      endAdornment={
                        <InputAdornment position="end">
                          <Button variant="text" onClick={setMax}>
                            Max
                          </Button>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <FormControl className="ohm-input textFieldProp" variant="outlined" color="primary" >
                    <FormLabel htmlFor="amount-input" className="textpro">ETH</FormLabel>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={2}>
                <Grid container direction="row" item xs={12} sm={12} md={5} lg={5}>
                  <FormControl className="ohm-input" color="primary" style={{flexDirection: "row"}}>
                    <Settings viewBox="0 0 32 32" style={{ height:50, width:50, color:"#ff0" }}/>
                    <Typography variant="h4" style={{marginTop: "10px", fontSize: "1.1rem"}}>Slippage</Typography>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box alignItems="center">
                    <FormControl className="ohm-input textFieldProp" variant="outlined" color="primary" style={{background: "#e55555"}}>
                      <FormLabel htmlFor="amount-input" className="textpro" >100</FormLabel>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={1} lg={1}>
            <Grid container direction="column" spacing={2} alignItems="center">
                <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                  <div style={{visibility:"hidden"}}>
                    <Typography variant="h3">S</Typography>
                  </div>
                </FormControl>
                <CompareArrows viewBox="0 0 32 32" style={{ height:64, width:64, color:"#ff0" }} onClick={setSwapDirectionCallback} />
                <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                  <div style={{visibility:"hidden"}}>
                    <Typography variant="h3">S</Typography>
                  </div>
                </FormControl>
            </Grid>
            
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid container direction="column" spacing={2}>
              <Box display="flex" alignItems="center">
                <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                  <div>
                    <Typography variant="h3">Swap To</Typography>
                  </div>
                </FormControl>
              </Box>
              <Grid container direction="row" spacing={2}>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                  <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      placeholder="0"
                      value={cstpBalance ? cstpBalance : ''}
                      onChange={e => setHIROBalanceCallback(e.target.value)}
                      labelWidth={0}
                      endAdornment={
                        <InputAdornment position="end">
                          <Button variant="text" onClick={setMax}>
                            Max
                          </Button>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <FormControl className="ohm-input textFieldProp" variant="outlined" color="primary" >
                    <FormLabel htmlFor="amount-input" className="textpro">HIRO</FormLabel>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={2}>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                  <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                    <Typography variant="h4" style={{marginTop: "10px", fontSize: "1.1rem"}}>Price Impact</Typography>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <FormControl className="ohm-input textFieldProp" variant="outlined" color="primary" style={{background: "#e55555"}}>
                    <FormLabel htmlFor="amount-input" className="textpro" >6.9%</FormLabel>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Grid container spacing={2} direction="column">
              <Box display="flex" alignItems="center">
                <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                  <div style={{visibility:"hidden"}}>
                    <Typography variant="h3"> AAA </Typography>
                  </div>
                </FormControl>
              </Box>
              <Grid item xs={12} sm={12} md={6} lg={6} className="swapBtnProp">
                <FormControl className="ohm-input" variant="outlined" color="primary">
                  {modalButton[2]}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} className="swapBtnProp">
                <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                  {modalButton[1]}
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
}