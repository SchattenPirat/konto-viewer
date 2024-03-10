import sache from '../assets/sache.jpg';
import styled from 'styled-components';

interface GermanFlagParts {
  readonly top?: boolean
  readonly middle?: boolean
  readonly bottom?: boolean
};

const DieSache = styled.div`
      display: flex;
      flex-direction: column;
      height: 100%;
      font-size: 16px;
    `;

const GermanFlagPart = styled.div<GermanFlagParts>`
      display: flex;
      flex: 1;
      height:0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${({ top, middle, bottom }) => pickFlagColor(top, middle, bottom)};
    `;

const Image = styled.img`
      height: 100%;
    `;

const EmphasizedText = styled.em`
      font-size: 200%;
      font-weight: bold;
    `;

const Welcome = styled.header`
      text-align: center;
      color: white;
      font-size: 200%;
    `;

const Description = styled.footer`
      text-align: center;
      font-size: 200%;
    `;

function pickFlagColor (top: boolean = false, middle: boolean = false, bottom: boolean = false): string {
  if (top && !(middle ?? bottom)) return 'black';
  if (middle && !(top ?? bottom)) return 'red';
  if (bottom && !(middle ?? top)) return 'yellow;';
  throw new Error('Invalid color for German flag');
}

const DieSachePage = (): JSX.Element => {
  return (
        <DieSache>
            <GermanFlagPart top>
                <Welcome>
                    Willkommen bei der React-Entwicklung für
                    <br/><br/>
                    <EmphasizedText>Die Sache</EmphasizedText>
                </Welcome>
            </GermanFlagPart>
            <GermanFlagPart middle>
                <Image src={sache}/>
            </GermanFlagPart>
            <GermanFlagPart bottom>
                <Description>
                    Entwickel deine App für den Widerstand! <br/>
                    Finde weitere Informationen zu den Entwicklungsguidelines auf <br/>
                    <a href="https://github.com/Die-Sache/create-die-sache-react-app-starter/blob/main/README.md">
                        GitHub
                    </a>
                </Description>
            </GermanFlagPart>
        </DieSache>
  );
};

export default DieSachePage;
