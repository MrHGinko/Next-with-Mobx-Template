import { Button, Divider } from 'antd';
import { observer } from 'mobx-react';
import { HomeOutlined, LoadingOutlined, SettingFilled, SyncOutlined } from '@ant-design/icons';
import styles from '../style/index.module.less';
import { useStore } from '../store/rootStore';
import Link from 'next/link';

function Index(props) {
	const { Counter } = useStore();

	console.log(Counter);

	return (
		<div className={styles.wrap}>
			<div className={styles.title}>
				Index Page
				{Counter.count}
			</div>
			<div>Welcome to Discovery Mall</div>
			<Button
				type="primary"
				onClick={() => {
					Counter.increment();
				}}
			>
				点击 + 1
			</Button>
			<Divider />
			<Button
				type="primary"
				onClick={() => {
					Counter.reset();
				}}
			>
				Reset
			</Button>
			<Link href="/test">
				<div>跳转</div>
			</Link>
		</div>
	);
}

export default observer(Index);
