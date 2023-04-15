import React from 'react';
import {
    Card,
    Stack,
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from './Table.styled';
import { Loading } from '@/components/commons/Loadings';

type ChangeLabelType = {
    origin: string;
    set: string;
};
type TableProps = {
    title: string;
    tableData: any[];
    noDataText?: React.ReactNode;
    hidingLabel?: any[];
    changeLabel?: ChangeLabelType[];
    noDataColspan: number;
    noDataLabel: any[];
    loading?: boolean;
    tableHeaderData?: any[] | undefined;
    method?: React.ReactNode;
    description?: React.ReactNode;
    stickyHeader?: boolean;
};

export const Table = (props: TableProps) => {
    const {
        title,
        tableData,
        noDataText,
        hidingLabel,
        changeLabel,
        noDataColspan,
        noDataLabel,
        loading = false,
        tableHeaderData,
        method,
        description,
        stickyHeader,
    } = props;
    const tableHeader = tableData.length > 0 ? Object.keys(tableData[0]) : noDataLabel;
    return (
        <Card>
            {(method || description) && (
                <Stack className="title">
                    {method}
                    {description}
                </Stack>
            )}
            <TableContainer>
                {loading && <Loading />}
                <div className="scroll-wrapper">
                    <MuiTable aria-label={title} stickyHeader={stickyHeader || false}>
                        <TableHead>
                            <TableRow>
                                {tableHeaderData !== undefined
                                    ? tableHeaderData.map((item, index) => {
                                          const { label, value } = item;
                                          const _label = tableData.length > 0 ? label : noDataLabel[index];
                                          const _value = tableData.length > 0 ? value : noDataLabel[index];
                                          return (
                                              <TableCell key={index} className={_label}>
                                                  <span>{_value}</span>
                                              </TableCell>
                                          );
                                      })
                                    : tableHeader.map((item, index) => {
                                          let label =
                                              hidingLabel && hidingLabel.includes(item) ? '' : item.replace(/_/g, ' ');
                                          const findIndex = changeLabel
                                              ? changeLabel.findIndex(
                                                    (changeLabelItem) => changeLabelItem.origin === item,
                                                )
                                              : -1;
                                          label =
                                              findIndex > -1 && changeLabel !== undefined
                                                  ? changeLabel[findIndex]?.set
                                                  : label;
                                          return (
                                              <TableCell key={index} className={item}>
                                                  <span>{label}</span>
                                              </TableCell>
                                          );
                                      })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.length > 0 ? (
                                tableData.map((item, index) => {
                                    return (
                                        <TableRow key={index}>
                                            {tableHeader.map((tableHeaderItem, tableHeaderIndex) => {
                                                return (
                                                    <TableCell key={tableHeaderIndex} className={tableHeaderItem}>
                                                        <span>{item[`${tableHeaderItem}`]}</span>
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={noDataColspan} className="no-data">
                                        <Typography className="grey-300" variant="body2">
                                            {noDataText || 'There is no data.'}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </MuiTable>
                </div>
            </TableContainer>
        </Card>
    );
};
