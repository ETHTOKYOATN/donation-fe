import { createGlobalStyle } from 'styled-components';

import theme from '@/styles/theme';

type ThemeProps = typeof theme;

const GlobalStyles = createGlobalStyle<{ theme: ThemeProps }>(
    (props) => `
    html, body {
        height: 100%;
    }

    #root {
      height: 100%
    }

    body {
      overflow-y: scroll;
      background: ${props.theme.palette.background['default']};
      min-width: 320px;
      
      scrollbar-color: ${'#464C64 #11183C'}; /* Firefox 63 compatibility */
      
      scrollbar-width: thin; /* Firefox 63 compatibility */

      pre {
        margin: 0;
      }

      &::-webkit-scrollbar {
        width: 12px;
        height: 12px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background-color: ${props.theme.palette.grey['200']};
    
        &:hover {
          background-color:${props.theme.palette.grey['300']};
        }
      }

      &::-webkit-scrollbar-track {
        background: ${props.theme.palette.grey[400]};
        
      }

      *::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background: ${props.theme.palette.secondary.light};
      }

      *::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: ${props.theme.palette.grey['200']};
    
        &:hover {
          background-color:${props.theme.palette.grey['300']};
        }
      }

      *::-webkit-scrollbar-track {
        background: ${props.theme.palette.secondary.light};
      }

      @media only screen and (max-width: 640px) {
        *::-webkit-scrollbar{
          display: none;
          width: 0;  
          height: 0;
          background: transparent;  
          -webkit-appearance: none;
          }
      }
      
      .text {
        &-primary {
          color: ${props.theme.palette.primary['main']};
        }
        &-secondary {
          color: ${props.theme.palette.secondary['light']};
        }
        &-success {
          color: ${props.theme.palette.success['main']};
        }
        &-warning {
          color: ${props.theme.palette.warning['main']};
        }
        &-disabled {
          color: ${props.theme.palette.grey['A200']};
        }
      }

      .MuiPopover-paper {
        &.error-info-box {
          box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.12);
          margin-top: 10px;
          @media only screen and (max-width: 768px) {
              width: calc(100% - 266px);
          }
          @media only screen and (max-width: 640px) {
              width:100%;
          }
        }

        &.help-info-box {
          
          margin-top: 25px;
          overflow: unset;
          border: 1px solid ${props.theme.palette.grey['200']};
          border-radius: 10px;
          &::before {
              background: ${props.theme.palette.background['default']};
              content:'';
              display: block;
              position: absolute;
              width: 12px;
              height: 12px;
              top: -6px;
              transform: rotate(45deg);
              left: calc(50% - 6px);
              border: 1px solid ${props.theme.palette.grey['200']};
              @media only screen and (max-width: 950px) {
                  left: calc(100% - 37%);
              }
              @media only screen and (max-width: 640px) {
                  left: calc(100% - 26px);
              }
          }
        }
      }

      .MuiButtonBase-root{
        .MuiTouchRipple-child {
          background: ${props.theme.palette.primary.light};
          display:none;
        }
      }
    }
`,
);

export default GlobalStyles;
